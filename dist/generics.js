// Generics
// Generics are a way of creating types that are expressed in terms of other types
const phoneList = [
    { customerId: "0001", areaCode: "321", num: "123-4566" },
    { customerId: "0002", areaCode: "174", num: "142-3626" },
    { customerId: "0003", areaCode: "192", num: "012-7190" },
    { customerId: "0005", areaCode: "402", num: "652-5782" },
    { customerId: "0004", areaCode: "301", num: "184-8501" },
];
/// ---cut---
function listToDict(list, idGen) {
    const dict = {};
    list.forEach((element) => {
        const dictKey = idGen(element);
        dict[dictKey] = element;
    });
    return dict;
}
const dict1 = listToDict(
//             ^?
[{ name: "Mike" }, { name: "Mark" }], (item) => item.name);
console.log(dict1);
dict1.Mike;
const dict2 = listToDict(phoneList, (p) => p.customerId);
//                  ^?
dict2.fax;
console.log(dict2);
