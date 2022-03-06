zodiac <- c("鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪")
branch <- c("子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥")
branchzodiac <- function(year) {
  return(paste0(branch[(year-3)%%12], zodiac[(year-3)%%12]))
}
