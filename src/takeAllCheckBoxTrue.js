const takeAllCheckBoxTrue = (section, filterCheckBox) => {
    let arrTrue = [];
    for (const key in filterCheckBox[section]) {
        if (filterCheckBox[section][key]) {
            arrTrue.push(key)
        }
    }
    return arrTrue;
}
export { takeAllCheckBoxTrue }