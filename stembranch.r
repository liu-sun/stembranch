stem <- c("甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸")
branch <- c("子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥")
stembranch <- function(year) {
  return(paste0(stem[(year-3)%%10], branch[(year-3)%%12]))
}
