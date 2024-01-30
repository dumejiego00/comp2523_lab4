import { CharacterGroup } from "./CharacterGroup";
import { NumberGroup } from "./NumberGroup";
import { SortUtil } from "./SortUtil";
const numberGroup = new NumberGroup([30, 3, -15, 0]);
const sorter1 = new SortUtil(numberGroup);
sorter1.sort();
console.log(numberGroup.data);
console.log("---------------------------");

const characterGroup = new CharacterGroup("Xaeyb");
const sorter2 = new SortUtil(characterGroup);
sorter2.sort();
console.log(characterGroup.data);
console.log("---------------------------");
