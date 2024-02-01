import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
	name: string;
	catchphrase: string;
	location: {
		lat: number;
		lng: number;
	}

	constructor() {
		this.name = faker.company.name()
		this.catchphrase = faker.company.catchPhrase()
		this.location = {
			lat: faker.location.latitude(),
			lng: faker.location.latitude()
		}
	}

	markerContent(): string {
		return `
<div>
<h1>${this.name}</h1>
<h3>${this.catchphrase}</h3>
</div>
`
	}
}
