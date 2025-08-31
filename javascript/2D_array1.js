//// print the 2D array in this format [1,3,6,2,4,8,6,5,5].

let arr = [[1,2,6],
          [3,4,5],
          [6,8,5]]

let bag=""
          for(let i =0;i<arr.length;i++){

            for(let j = 0 ;j<arr[i].length;j++){

                bag+= arr[j][i]
            }
          }

          console.log(...bag)