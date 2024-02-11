import { CharactersCollection } from "./CharactersCollection"
import { LinkedList } from "./LinkedList"
import { NumbersCollection } from "./NumbersCollection"

const ncollection = new NumbersCollection([10, 3, -5, 0])
ncollection.sort()
console.log(ncollection.data)

const ccollection = new CharactersCollection('Xaayb')
ccollection.sort()
console.log(ccollection.data)

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(22)
linkedList.add(-3)
linkedList.add(4)


linkedList.sort()
linkedList.print()
