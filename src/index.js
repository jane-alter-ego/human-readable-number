const toReadable = (number) => {
    let str = number.toString();

    if (str.length === 1 && str[0] === '0') {
        return 'zero';
    };
    
    const lastChar = (str) => {
if (str[str.length-1] === '0' && str[str.length-2] === '1') {
    return 'ten';
} else if (str[str.length-1] === '1' && str[str.length-2] === '1') {
    return 'eleven';
} else if (str[str.length-1] === '2' && str[str.length-2] === '1') {
    return 'twelve';
} else if (str[str.length-1] === '3' && str[str.length-2] === '1') {
    return 'thirteen';
} else if (str[str.length-1] === '4' && str[str.length-2] === '1') {
    return 'fourteen';
} else if (str[str.length-1] === '5' && str[str.length-2] === '1') {
    return 'fifteen';
} else if (str[str.length-1] === '6' && str[str.length-2] === '1') {
    return 'sixteen';
} else if (str[str.length-1] === '7' && str[str.length-2] === '1') {
    return 'seventeen';
} else if (str[str.length-1] === '8' && str[str.length-2] === '1') {
    return 'eighteen';
} else if (str[str.length-1] === '9' && str[str.length-2] === '1') {
    return 'nineteen';
} else if (str[str.length-1] === '1' && str[str.length-2] !== '1') {
    return 'one';
} else if (str[str.length-1] === '2' && str[str.length-2] !== '1') {
    return 'two';
} else if (str[str.length-1] === '3' && str[str.length-2] !== '1') {
    return 'three';
} else if (str[str.length-1] === '4' && str[str.length-2] !== '1') {
    return 'four';
} else if (str[str.length-1] === '5' && str[str.length-2] !== '1') {
    return 'five';
} else if (str[str.length-1] === '6' && str[str.length-2] !== '1') {
    return 'six';
} else if (str[str.length-1] === '7' && str[str.length-2] !== '1') {
    return 'seven';
} else if (str[str.length-1] === '8' && str[str.length-2] !== '1') {
    return 'eight';
} else if (str[str.length-1] === '9' && str[str.length-2] !== '1') {
    return 'nine';
};
    };
 
    const dozens = (str) => {
     if (str[str.length-2] === '2') {
        return 'twenty';
     } else if (str[str.length-2] === '3') {
        return 'thirty';
     } else if (str[str.length-2] === '4') {
        return 'forty';
     } else if (str[str.length-2] === '5') {
        return 'fifty';
     } else if (str[str.length-2] === '6') {
        return 'sixty';
     } else if (str[str.length-2] === '7') {
        return 'seventy';
     }  else if (str[str.length-2] === '8') {
        return 'eighty';
     } else if (str[str.length-2] === '9') {
        return 'ninety';
     };
    };

    const hundreds = (str) => {
        if (str[str.length-3] === '1' && str[str.length-4] !== '1') {
            return 'one hundred';
        } else if (str[str.length-3] === '2' && str[str.length-4] !== '1') {
            return 'two hundred';
        } else if (str[str.length-3] === '3' && str[str.length-4] !== '1') {
            return 'three hundred';
        } else if (str[str.length-3] === '4' && str[str.length-4] !== '1') {
            return 'four hundred';
        } else if (str[str.length-3] === '5' && str[str.length-4] !== '1') {
            return 'five hundred';
        } else if (str[str.length-3] === '6' && str[str.length-4] !== '1') {
            return 'six hundred';
        } else if (str[str.length-3] === '7' && str[str.length-4] !== '1') {
            return 'seven hundred';
        } else if (str[str.length-3] === '8' && str[str.length-4] !== '1') {
            return 'eight hundred';
        } else if (str[str.length-3] === '9' && str[str.length-4] !== '1') {
            return 'nine hundred';
        } else if (str[str.length-3] === '0' && str[str.length-4] === '1') {
            return 'ten hundred';
        } else if (str[str.length-3] === '1' && str[str.length-4] === '1') {
            return 'eleven hundred';
        } else if (str[str.length-3] === '2' && str[str.length-4] === '1') {
            return 'twelve hundred';
        } else if (str[str.length-3] === '3' && str[str.length-4] === '1') {
            return 'thirteen hundred';
        } else if (str[str.length-3] === '4' && str[str.length-4] === '1') {
            return 'fourteen hundred';
        } else if (str[str.length-3] === '5' && str[str.length-4] === '1') {
            return 'fifteen hundred';
        } else if (str[str.length-3] === '6' && str[str.length-4] === '1') {
            return 'sixteen hundred';
        } else if (str[str.length-3] === '7' && str[str.length-4] === '1') {
            return 'seventeen hundred';
        } else if (str[str.length-3] === '8' && str[str.length-4] === '1') {
            return 'eighteen hundred';
        } else if (str[str.length-3] === '9' && str[str.length-4] === '1') {
            return 'nineteen hundred';
    };
};

    const dozenOfHundreds = (str) => {
        if (str[str.length-4] === '2') {
            return 'twenty hundred';
     } else if (str[str.length-4] === '3') {
        return 'thirty hundred';
     } else if (str[str.length-4] === '4') {
        return 'forty hundred';
     } else if (str[str.length-5] === '5') {
        return 'fifty hundred';
     } else if (str[str.length-6] === '6') {
        return 'sixty hundred';
     } else if (str[str.length-7] === '7') {
        return 'seventy hundred';
     }  else if (str[str.length-8] === '8') {
        return 'eighty hundred';
     } else if (str[str.length-9] === '9') {
        return 'ninety hundred';
     };
    };

const result = [
    dozenOfHundreds(str),
    hundreds(str),
    dozens(str),
    lastChar(str),
];

return result.filter((str) => str && str.length > 0).join(' ');

};

module.exports = toReadable;

