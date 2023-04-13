function solution(id_list, report, k) {
  let reportedUsers = {};
  let reporterReported = {};

  for (let id of id_list) reporterReported[id] = 0;

  let reportSet = new Set(report);
  for (let one of reportSet) {
    let reported = one.split(" ")[1];
    if (reportedUsers[reported] !== undefined) reportedUsers[reported]++;
    else reportedUsers[reported] = 1;
  }

  for (let one of reportSet) {
    let [reporter, reported] = one.split(" ");
    if (reportedUsers[reported] >= k) reporterReported[reporter]++;
  }

  return Object.values(reporterReported);
}