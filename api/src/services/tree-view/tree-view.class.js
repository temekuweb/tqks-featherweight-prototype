/* eslint-disable no-unused-vars */

var conversation = null

class Service {
  constructor (options) {
    this.options = options || {}
  }

  /**
   * Set the conversation service for fetching tree nodes
   * @param {} conv 
   */
  setConversation (conv) {
    conversation = conv
    // console.info('TS', conversation)
  }

  async find () {
    return []
  }

  populateKids (questionArray, answerArray, proArray, conArray) {
    let result = [] // always return at least an empty list
    var i
    if (questionArray) {
      for (i in questionArray) {
        result.push(questionArray[i])
      }
    }
    if (answerArray) {
      for (i in answerArray) {
        result.push(answerArray[i])
      }
    }
    if (proArray) {
      for (i in proArray) {
        result.push(proArray[i])
      }
    }
    if (conArray) {
      for (i in conArray) {
        result.push(conArray[i])
      }
    }
    return result
  }

  /**
   * A recursive tree builder
   * @param {*} rootNodeId 
   * @param {*} callback signature: (jsonTree)
   */
  async toJsTree (rootNodeId) {
    var thisNode
    var childArray
    console.info('ToJsTree', rootNodeId)
    // Use find to avoid populating the children
    const respConv = await conversation.find({query: { id: rootNodeId }})
    const node = respConv.data[0]
    console.info('TV-1', rootNodeId, JSON.stringify(node))
    thisNode = {}
    thisNode.label = node.label
    thisNode.img = node.imgsm
    childArray = this.populateKids(node.questions, node.answers, node.pros, node.cons)
    thisNode.children = []
    const arrPromises = childArray.map( child => this.toJsTree(child));
    const children = await Promise.all(arrPromises)
   
    thisNode.children = children
    console.info('Going Back', thisNode)
    return thisNode;
  }

  async get (id) {
    try {
      // A recursive walk down a tree from a root node identified by id
      return await this.toJsTree(id)   
    } catch (e) {
      console.error('Error fetching', e)
    }
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)))
    }

    return data
  }

  async update (data) {
    return data
  }

  async patch (data) {
    return data
  }

  async remove (id) {
    return { id }
  }
}

module.exports = function (options) {
  return new Service(options)
};

module.exports.Service = Service
