import items = require('items');
import when = require('when');

export import Item = items.Item;
export import Promise = when.Promise;

export class Barista extends items.Worker {
	private current = when.resolve<Item>(null);

	constructor(name: string, public speed: number) {
		super(name);
	}

	public newOrder(name: string, table: number): Promise<Item> {
		console.log("Barista queueing " + name + " for " + table);
		return (this.current = when.promise<Item>((resolve, reject) => {
			this.current.then((value) => {
				setTimeout(() => {
					console.log("Barista completed " + name + " for " + table);
					resolve(new Item(name, table, 1))
				}, 1000 * this.speed);
			});
		}));
	}
}
