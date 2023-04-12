import { observable, makeObservable,action } from 'mobx'

export class Item {

    constructor(name) {
        this.name = name
        this.completed = false
        this.location = "Super Sell"

        makeObservable(this, {
            name: observable,
            completed: observable,
            checkItem: action
        })
    }
    checkItem = (e) => {
        this.props.store.checkItem(e.target.value)
      }

      render() {
        let item = this.props.item
        return (
            <div className = {item.completed ? "crossed": null}>
              <input 
                type="checkbox"
                onClick = {this.checkItem} 
                value={item.name}
              /> 
              {item.name} 
            </div>)
      }
    }
    
    export default observer(Item)