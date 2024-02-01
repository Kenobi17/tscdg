import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

const company = new Company()

const user = new User()

const map = new CustomMap('map', 1)

map.addMarker(user)
map.addMarker(company)


