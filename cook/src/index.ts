import items = require('items');
import when = require('when');

import Item = items.Item;
import Promise = when.Promise;

export class Cook extends items.Worker {
	private current = when.resolve<Item>(null);

	constructor(name: string, public speed: number) {
		super(name);
	}

	public newOrder(name: string, table: number): Promise<Item> {
		console.log("Cook queueing " + name + " for " + table);
		return (this.current = when.promise<Item>((resolve, reject) => {
			this.current.then((value) => {
				setTimeout(() => {
					console.log("Cook completed " + name + " for " + table);
					resolve(new Item(name, table, name.length))
				}, 1000 * this.speed);
			});
		}));
	}
}
