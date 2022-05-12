class SetUtil {
  static intersection = (set1: any[], set2: any[]) =>
    set1.filter((val) => set2.includes(val));

  static isSubset = (set1: any[], set2: any[]) =>
    SetUtil.intersection(set1, set2).length === set1.length;

  static difference = (set1: any[], set2: any[]) =>
    set1.filter((val) => !set2.includes(val));
}

export default SetUtil;
