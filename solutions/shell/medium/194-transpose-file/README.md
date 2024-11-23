# 194. Transpose File (Medium)

### Problem 

Given a text file file.txt, transpose its content.

You may assume that each row has the same number of columns, and each field is separated by the ' ' character.

Example:

If file.txt has the following content:

name age
alice 21
ryan 30
Output the following:

name alice ryan
age 21 30

### Solution

```bash
awk '{
    for (i = 1; i <= NF; i++) {
        if (NR == 1) {
            a[i] = $i
        } else {
            a[i] = a[i] " " $i
        }
    }
}
END {
    for (i = 1; i <= NF; i++) {
        print a[i]
    }
}' file.txt
```
