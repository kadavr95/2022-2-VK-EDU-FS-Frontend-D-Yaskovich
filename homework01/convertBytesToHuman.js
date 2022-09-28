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
    let prefixes = ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
    let index = 0
    if (!Number.isInteger(bytes) || bytes < 0) {
        return false
    }
    while (index < prefixes.length - 1 && bytes / 1024 ** index >= 1024) {
        index += 1
    }
    if (bytes % 1024 ** index === 0) {
        return (Math.round(bytes / 1024 ** index, 2) + ' ' + prefixes[index])
    } else {
        return ((bytes / 1024 ** index).toFixed(2) + ' ' + prefixes[index])
    }
}
