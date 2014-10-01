import items = require('items');
import when = require('when');

import Item = items.Item;
export import Promise = when.Promise;

class Split {
	public items: Item[] = [];
	public total = 0;
}

class Splits {
	public sets: Split[] = [];
	public currentSet = new Split();
}

export class Waiter extends items.Worker {
	constructor(name: string, public maxCapacity: number) {
		super(name);
	}

	public serveItems(items: Promise<Item>[]) {
		when.reduce(items, this.processSplit, new Splits())
			.then(this.serveSplitItems);
	}

	private processSplit(splits: Splits, item: Item, index: number, count: number) {
		if (splits.currentSet.total + item.size > this.maxCapacity) {
			splits.sets.push(splits.currentSet);
			splits.currentSet = new Split();
		}
		splits.currentSet.total += item.size;
		splits.currentSet.items.push(item);
		return splits
	}

	private serveSplitItems(splits: Splits) {
		splits.sets.forEach(split => split.items.forEach(this.serveItem));
	}

	private serveItem(item: Item) {
		console.log("Serving " + item.name + " to " + item.table);
	}
}
