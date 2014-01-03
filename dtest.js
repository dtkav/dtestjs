// dtest - By Daniel Grossmann-Kavanagh (MIT Licensed)

var colors = require('colors');

var sum = function(acc, x) { return acc + x };

var dtest = function() {
   var sets = [];
   var stat = function(stat_name) { 
      return sets.map(function(x){return x.stats[stat_name]}) 
   };
   var num_failures = function() {
      return stat("num_failures").reduce(sum);
   };
   var num_passes = function() {
      return stat("num_passes").reduce(sum);
   };   
   var failures = function() {
      return stat("failures").reduce(function(acc, x) { return acc.concat(x) });
   };
   var print_failures = function() {
      console.log("\n[[ FAILURES ]]".bold)
      failures().map(function(x) {
         if(typeof(x.ut !== 'undefined')
         && typeof(x.failure !== 'undefined'))
            console.log(x.ut.bold.grey + " - " + x.failure);
      });
   };
   print_stats = function() {
      console.log(("\n" + num_passes()).green + "|" + ("" + num_failures()).red);
   };
   return {
      num_failures: num_failures
      , num_passes: num_passes
      , failures: failures
      , print_failures: print_failures
      , print_stats: print_stats
      , ut: function(test_name) {
         var stats = { failures: [], num_failures: 0, num_passes: 0 };
         sets.push({ test_name: test_name, stats: stats });
         var assert;
         var name = test_name + " ";
         return assert = (function(assertion, message) {
            if(typeof(assertion) !== 'undefined'
            && typeof(message) !== 'undefined') {
               if (assertion) {
                  console.log('PASS :: '.green.bold + name.grey.bold + message);
                  stats.num_passes++;
               } else {
                  str = 'FAIL :: '.red.bold + name.grey.bold + message;
                  console.log(str);
                  stats.failures.push({ ut: test_name, failure: message });
                  stats.num_failures++;
               }
               return { pass: stats.num_passes, fail: stats.num_failures };
            }
         });
      }
   }
}

module.exports = new dtest();
