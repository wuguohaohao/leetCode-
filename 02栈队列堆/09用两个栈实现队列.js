/**
 * 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
 * 分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
 */

 class CQueue {
  constructor() {
      this.inStack = []; 
      this.outStack = [];
  }

  appendTail(value){
      this.inStack.push(value)
      return null
  }

  deleteHead() {
      if(!this.outStack.length){
          if(!this.inStack.length){
              return -1 //若outStack和inStack都没有值 输出-1
          }else{
              while(this.inStack.length){
                  //当outStack空，inStack有值时，将inStack的元素加入到outStack
                  // 保证队列特性：先进先出
                 this.outStack.push(this.inStack.pop()) 
              }
          }
      }

      return this.outStack.pop()

  }
}

/**
* Your CQueue object will be instantiated and called as such:
* var obj = new CQueue()
* obj.appendTail(value)
* var param_2 = obj.deleteHead()
*/