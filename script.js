function manipulateArray() {
            // Initial Promise: Resolves with [1, 2, 3, 4] after 3 seconds
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([1, 2, 3, 4]);
                }, 3000);
            });
        }

        manipulateArray()
            .then((arr) => {
                // First transformation: Filter out odd numbers
                return new Promise((resolve) => {
                    let evenNumbers = arr.filter(num => num % 2 === 0);
                    setTimeout(() => {
                        document.getElementById("output").innerText = evenNumbers.toString();
                        resolve(evenNumbers);
                    }, 1000);
                });
            })
            .then((evenNumbers) => {
                // Second transformation: Multiply even numbers by 2
                return new Promise((resolve) => {
                    let multipliedNumbers = evenNumbers.map(num => num * 2);
                    setTimeout(() => {
                        document.getElementById("output").innerText = multipliedNumbers.toString();
                        resolve(multipliedNumbers);
                    }, 2000);
                });
            });