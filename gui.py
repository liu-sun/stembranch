import tkinter as tk
import tkinter.messagebox

root = tk.Tk()
root.title("干支")
root.geometry('400x225')
entry = tk.Entry(root)
entry.pack(side="left")
label = tk.Label(root, text="年")
label.pack(side="left")


def stembranch():
    stem = "甲乙丙丁戊己庚辛壬癸"
    branch = "子丑寅卯辰巳午未申酉戌亥"
    try:
        tkinter.messagebox.showinfo(title="干支", message=stem[(
            int(entry.get())-4) % 10]+branch[(int(entry.get())-4) % 12])
    except ValueError:
        tkinter.messagebox.showerror(title="干支", message="请输入数字！")


button = tk.Button(root, text="查询", command=stembranch)
button.pack(side="right")
root.mainloop()
