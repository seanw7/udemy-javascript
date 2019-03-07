


input_list = ['P371263', 'P712344', 'P912373', 'P189344', 'P294910', 'P498132', 'P598132', 'P681739', 'P813849']


fuckin 

[]

#P371263 == //nasuni/users/P3/7/1/2
directory_structure = {}

for homedir in input_list:
    directory_structure[homedir] = {'first': homedir[:2], 'second': homedir[2], 'third': homedir[3]}
    #print(homedir)

#print(directory_structure)

for key,value in directory_structure.items():
    #print(k)
    #print(v)
    directory_structure[key] = "//nasuni/users/{}/{}/{}".format(value['first'], value['second'], value['third']) 

print(directory_structure)]






#//old_filer/homedrives/users/P371263 -> //nasuni/users/P3/7/1/2

# for homedir in input_list:
#     print(homedir)