/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  if (typeof bytes === "number" && Number.isInteger(bytes) && bytes>=0) {
    const exp_dict = {
      0: ' B',
      1: ' KB',
      2: ' MB',
      3: ' GB',
      4: ' TB'
    };
    let exp =0
    while (bytes >= 1024 ){
      bytes = bytes / 1024;
      exp = exp+1
    }
    if (Number.isInteger(bytes)) {
      return bytes.toString()+exp_dict[exp]
    }
    else{
      return bytes.toFixed(2)+exp_dict[exp]
    }
    }
  else {
    return false
  }
}
