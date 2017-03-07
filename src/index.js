import Insect from './insect';
import Exports from './exports';

var spider = new Insect("Spider");
spider.legsCount = 8;
spider.doSomething();

/* Playing with module exports */
var model = new Exports.Person('Edgar Flores P.');
model.sayhello();
Exports.SimpleMethod();