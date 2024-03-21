"use strict";
let Guest_list = ['Imran Khan', 'Nawaz Sharif', 'Asif Ali Zardari'];
// for(let i=0; i<Guest_list.length; i++){
// console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n')
// }
let absent_Guest = 'Imran Khan';
let new_Guest = 'Kamran Tessori';
Guest_list[0] = new_Guest;
// for(let i=0; i<Guest_list.length; i++){
// console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n')
// }
// console.log( `Mr. ${absent_Guest} is not coming to the party.` );
// console.log('\n\nGood News! We find a big table so we are inviting 3 more guests.\n\n');
//added 3 guests in the array in this step.
Guest_list.unshift('Sir Zia Khan');
Guest_list.splice(2, 0, 'Maryam Nawaz');
Guest_list.push('Bilawal Bhutto Zardari');
// i print array of the 6th guest here.
// for(let i=0; i<Guest_list.length; i++){
// console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n')
// }
// sorry message to guest who are not invited.
// console.log('\nSorry we cannot arrange big table, So only two people will be invited.');
// i am removing guests in this step.
while (Guest_list.length > 2) {
    let remove_Guest = Guest_list.pop();
    //    console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
}
// our remaining 2 guests who are invited.
// for(let i=0; i<Guest_list.length; i++){
// console.log('\n\nDear Mr. ' + Guest_list[i] + ',\n\nYou are still invited. \n\nThank You!\n\n')
// }
// i removed all the guests from array.
Guest_list.splice(0, 2);
console.log(Guest_list);
// Exersice 19
// Print a message indicatng the number of people you are inviting to dinner.
console.log(`Total number of Guest are: ${Guest_list.length}`);
