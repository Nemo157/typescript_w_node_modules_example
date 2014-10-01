import waiters = require('waiter');
import baristas = require('barista');
import cooks = require('cook');


var waiter = new waiters.Waiter("John", 5);
var cook = new cooks.Cook("Bob", 2);
var barista = new baristas.Barista("Sally", 0.5);

var steak = cook.newOrder("Steak", 1);
var latte = barista.newOrder("Latte", 1);
var hamburgers = cook.newOrder("Hamburgers", 2);
var soup = cook.newOrder("Soup", 1);
var piccolo = barista.newOrder("Piccolo", 2);
var cappa = barista.newOrder("Cappuccino", 1);

waiter.serveItems([steak, soup, latte, cappa]);
waiter.serveItems([hamburgers, piccolo]);
