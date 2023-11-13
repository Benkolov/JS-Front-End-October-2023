function pascalCaseSplitter(inputString) {
    const wordsArray = inputString.split(/(?=[A-Z])/);
    const result = wordsArray.join(', ');

    console.log(result);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');
