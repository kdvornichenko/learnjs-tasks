'' + 1 + 0 // 10 - string
'' - 1 + 0 // -1 - number
true + false // 1 - number,  1+0=1
6 / '3' // 2 - number, преобразует строчную 3 в число и делит
'2' * '3' // 6 - number, преобразует в числа
4 + 5 + 'px' // 9px - string
'$' + 4 + 5 // $45 - string
'4' - 2 // 2 - number
'4px' - 2 // NaN - нельзя отнять число от строки
'  -9  ' + 5 //  -9  5 - string
'  -9  ' - 5 // -14 - number
null + 1 // 1 - number
undefined + 1 // NaN - undefined == null, но не равен ничему другому, соовтетственно нельзя привести к опр. типу
' \t \n' - 2 // -2 - number, табуляция + новая строка -2
