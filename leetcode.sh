# 192. Word Frequency (Medium)
# 
# Write a bash script to calculate the 
# frequency
#  of each word in a text file words.txt.

# For simplicity sake, you may assume:

# words.txt contains only lowercase characters and space ' ' characters.
# Each word must consist of lowercase characters only.
# Words are separated by one or more whitespace characters.
# Example:

# Assume that words.txt has the following content:

# the day is sunny the the
# the sunny is is
# Your script should output the following, sorted by descending frequency:

# the 4
# is 3
# sunny 2
# day 1

cat words.txt | tr -s ' ' '\n' | sort | uniq -c | sort -nr | awk '{print $2" "$1}'



# 193. Valid Phone Numbers (Easy)

# Given a text file file.txt that contains a list of phone numbers (one per line), write a one-liner bash script to print all valid phone numbers.

# You may assume that a valid phone number must appear in one of the following two formats: (xxx) xxx-xxxx or xxx-xxx-xxxx. (x means a digit)

# You may also assume each line in the text file must not contain leading or trailing white spaces.

# Example:

# Assume that file.txt has the following content:

# 987-123-4567
# 123 456 7890
# (123) 456-7890
# Your script should output the following valid phone numbers:

# 987-123-4567
# (123) 456-7890

grep -P '^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$' file.txt


# 194. Transpose File (Medium)

# Given a text file file.txt, transpose its content.

# You may assume that each row has the same number of columns, and each field is separated by the ' ' character.

# Example:

# If file.txt has the following content:

# name age
# alice 21
# ryan 30
# Output the following:

# name alice ryan
# age 21 30

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



# 195. Tenth Line (Easy)

# Given a text file file.txt, print just the 10th line of the file.

# Example:

# Assume that file.txt has the following content:

# Line 1
# Line 2
# Line 3
# Line 4
# Line 5
# Line 6
# Line 7
# Line 8
# Line 9
# Line 10
# Your script should output the tenth line, which is:

# Line 10

sed '10q;d' file.txt || echo "< 10 lines"
