// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun()
saturdayFun("bathe my dog")

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}
mondayWork()
mondayWork("fly to Atlanta")



function wrapAdjective(flair = "*") {
    return function (compliment = "special") {

        return `You are ${flair}${compliment}${flair}!`;
    }
}
wrapAdjective("$")("talented");

