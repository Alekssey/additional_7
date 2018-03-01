module.exports = function solveSudoku(matrix,ziro) {
      // your solution
    let numbers = [1,2,3,4,5,6,7,8,9];
    let obj_array = [];
    let numb_array = [];
    let obj = {};
    let index;
    let count_col = 0;
    let count_block = 0;
    let swap;
    let numbers_for = [];
    let ziro_past = ziro || 0;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < 9; j++){
            for(let k = 0; k < numbers.length; k++){
                if(matrix[i][j] == numbers[k]){
                    numbers.splice(k,1);
                    k--;
                }
            }
        }

        for(let j = 0; j < 9; j++) {
            if(matrix[i][j] == 0){
                for(let k = 0; k < numbers.length; k++){
                    for(let l = 0; l < 9; l++){
                        if(numbers[k] != matrix[l][j]){
                            count_col++;
                        }
                    }
                    if(i >= 0 && i <= 2){
                        if(j >= 0 && j <= 2){
                            for(let l = 0; l < 3; l++){
                                for(let m = 0; m < 3; m++){
                                    if(numbers[k] != matrix[l][m]){
                                        count_block++;
                                    }
                                }
                            }
                        } else if (j >= 3 && j <= 5){
                            for(let l = 0; l < 3; l++){
                                for(let m = 3; m < 6; m++){
                                    if(numbers[k] != matrix[l][m]){
                                        count_block++;
                                    }
                                }
                            }
                        } else if (j >= 6 && j <= 8){
                            for(let l = 0; l < 3; l++){
                                for(let m = 6; m < 9; m++){
                                    if(numbers[k] != matrix[l][m]){
                                        count_block++;
                                    }
                                }
                            }
                        }
                    } else if (i >= 3 && i <= 5){
                        if(j >= 0 && j <= 2){
                            for(let l = 3; l < 6; l++){
                                for(let m = 0; m < 3; m++){
                                    if(numbers[k] != matrix[l][m]){
                                        count_block++;
                                    }
                                }
                            }
                        } else if (j >= 3 && j <= 5){
                            for(let l = 3; l < 6; l++){
                                for(let m = 3; m < 6; m++){
                                    if(numbers[k] != matrix[l][m]){
                                        count_block++;
                                    }
                                }
                            }
                        } else if (j >= 6 && j <= 8){
                            for(let l = 3; l < 6; l++){
                                for(let m = 6; m < 9; m++){
                                    if(numbers[k] != matrix[l][m]){
                                        count_block++;
                                    }
                                }
                            }
                        }
                    } else if(i >= 6 && i <= 8){
                        if(j >= 0 && j <= 2){
                            for(let l = 6; l < 9; l++){
                                for(let m = 0; m < 3; m++){
                                    if(numbers[k] != matrix[l][m]){
                                        count_block++;
                                    }
                                }
                            }
                        } else if (j >= 3 && j <= 5){
                            for(let l = 6; l < 9; l++){
                                for(let m = 3; m < 6; m++){
                                    if(numbers[k] != matrix[l][m]){
                                        count_block++;
                                    }
                                }
                            }
                        } else if (j >= 6 && j <= 8){
                            for(let l = 6; l < 9; l++){
                                for(let m = 6; m < 9; m++){
                                    if(numbers[k] != matrix[l][m]){
                                        count_block++;
                                    }
                                }
                            }
                        }
                    }

                    if(count_block == 9 && count_col == 9){
                        numb_array.push(numbers[k])
                    }
                    count_col = 0;
                    count_block = 0;
                }
                obj['index'] = j;
                obj['numbers'] = numb_array;
                numb_array = [];
                obj_array.push(obj);
                obj = {};
            }
        }

        // console.log(obj_array);

        for(let j = 0; j < obj_array.length; j++){
            if(obj_array[j]['numbers'].length == 1){
                swap = obj_array[j]['numbers'][0];
                index = obj_array[j]['index'];
                matrix[i].splice(index,1,swap);
                obj_array[j]['numbers'] = [];
                j = -1;
                for(let k = 0; k < obj_array.length; k++){
                    for(let l = 0; l < obj_array[k]['numbers'].length; l++){
                        if(swap == obj_array[k]['numbers'][l]){
                            obj_array[k]['numbers'].splice(l,1);
                        }
                    }
                }
            }
            // console.log(obj_array);
        }
        obj_array = [];
        numbers = [1,2,3,4,5,6,7,8,9];
    }

    function refresh() {
        obj_array = [];
        numbers = [1,2,3,4,5,6,7,8,9];

        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < 9; j++){
                for(let k = 0; k < numbers.length; k++){
                    if(matrix[i][j] == numbers[k]){
                        numbers.splice(k,1);
                        k--;
                    }
                }
            }

            for(let j = 0; j < 9; j++) {
                if(matrix[i][j] == 0){
                    for(let k = 0; k < numbers.length; k++){
                        for(let l = 0; l < 9; l++){
                            if(numbers[k] != matrix[l][j]){
                                count_col++;
                            }
                        }
                        if(i >= 0 && i <= 2){
                            if(j >= 0 && j <= 2){
                                for(let l = 0; l < 3; l++){
                                    for(let m = 0; m < 3; m++){
                                        if(numbers[k] != matrix[l][m]){
                                            count_block++;
                                        }
                                    }
                                }
                            } else if (j >= 3 && j <= 5){
                                for(let l = 0; l < 3; l++){
                                    for(let m = 3; m < 6; m++){
                                        if(numbers[k] != matrix[l][m]){
                                            count_block++;
                                        }
                                    }
                                }
                            } else if (j >= 6 && j <= 8){
                                for(let l = 0; l < 3; l++){
                                    for(let m = 6; m < 9; m++){
                                        if(numbers[k] != matrix[l][m]){
                                            count_block++;
                                        }
                                    }
                                }
                            }
                        } else if (i >= 3 && i <= 5){
                            if(j >= 0 && j <= 2){
                                for(let l = 3; l < 6; l++){
                                    for(let m = 0; m < 3; m++){
                                        if(numbers[k] != matrix[l][m]){
                                            count_block++;
                                        }
                                    }
                                }
                            } else if (j >= 3 && j <= 5){
                                for(let l = 3; l < 6; l++){
                                    for(let m = 3; m < 6; m++){
                                        if(numbers[k] != matrix[l][m]){
                                            count_block++;
                                        }
                                    }
                                }
                            } else if (j >= 6 && j <= 8){
                                for(let l = 3; l < 6; l++){
                                    for(let m = 6; m < 9; m++){
                                        if(numbers[k] != matrix[l][m]){
                                            count_block++;
                                        }
                                    }
                                }
                            }
                        } else if(i >= 6 && i <= 8){
                            if(j >= 0 && j <= 2){
                                for(let l = 6; l < 9; l++){
                                    for(let m = 0; m < 3; m++){
                                        if(numbers[k] != matrix[l][m]){
                                            count_block++;
                                        }
                                    }
                                }
                            } else if (j >= 3 && j <= 5){
                                for(let l = 6; l < 9; l++){
                                    for(let m = 3; m < 6; m++){
                                        if(numbers[k] != matrix[l][m]){
                                            count_block++;
                                        }
                                    }
                                }
                            } else if (j >= 6 && j <= 8){
                                for(let l = 6; l < 9; l++){
                                    for(let m = 6; m < 9; m++){
                                        if(numbers[k] != matrix[l][m]){
                                            count_block++;
                                        }
                                    }
                                }
                            }
                        }

                        if(count_block == 9 && count_col == 9){
                            numb_array.push(numbers[k])
                        }
                        count_col = 0;
                        count_block = 0;
                    }
                    obj['X'] = j;
                    obj['Y'] = i;
                    obj['numbers'] = numb_array;
                    numb_array = [];
                    obj_array.push(obj);
                    obj = {};
                }
            }
            numbers = [1,2,3,4,5,6,7,8,9];
        }

    }

    refresh();

    for(let i = 0; i < matrix.length; i++){
        row: for(let j = 0; j < 9; j++){
            if(matrix[i][j] == 0){
                for(let k = 0; k < obj_array.length; k++){
                    if(obj_array[k]['X'] == j && obj_array[k]['Y'] == i){
                        numbers_for = obj_array[k]['numbers'];
                        next: for(let l = 0; l < numbers_for.length; l++) {
                            obj: for(let m = 0; m < obj_array.length; m++){
                                if (obj_array[k]['Y'] == obj_array[m]['Y'] && obj_array[k]['X'] != obj_array[m]['X']){
                                    for(let n = 0; n < obj_array[m]['numbers'].length; n++){
                                        if (numbers_for[l] == obj_array[m]['numbers'][n]){
                                            continue next;
                                        }
                                    }
                                }
                                if(m < obj_array.length - 1){
                                    continue obj;
                                } else if(m == obj_array.length - 1) {
                                    matrix[i].splice(j,1,numbers_for[l]);
                                    obj_array.splice(k,1);
                                    refresh();
                                    continue row;
                                }
                            }
                        }

                        next: for(let l = 0; l < numbers_for.length; l++) {
                            obj: for(let m = 0; m < obj_array.length; m++){
                                if (obj_array[k]['X'] == obj_array[m]['X'] && obj_array[k]['Y'] != obj_array[m]['Y']){
                                    for(let n = 0; n < obj_array[m]['numbers'].length; n++){
                                        if (numbers_for[l] == obj_array[m]['numbers'][n]){
                                            continue next;
                                        }
                                    }
                                }
                                if(m < obj_array.length - 1){
                                    continue obj;
                                } else if(m == obj_array.length - 1) {
                                    matrix[i].splice(j,1,numbers_for[l]);
                                    obj_array.splice(k,1);
                                    refresh();
                                    continue row;
                                }
                            }
                        }

                    }
                }
            }
        }
    }

    let count_true = 0;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < 9; j++){
            if(matrix[i][j] == 0){
                count_true++;
            }
        }
    }
    if(count_true == ziro_past){
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < 9; j++){
                if(matrix[i][j] == 0){
                    matrix[i].splice(j,1,[]);
                }
            }
        }
        return matrix;
    }
    if(count_true > 0){
        ziro_past = count_true;
        return solveSudoku(matrix,ziro_past);
    } else if(count_true == 0){
        return matrix;
    }

}


