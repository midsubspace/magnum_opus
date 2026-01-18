import_code("/bin/SwOY5/imports/custom_libs.gs")
import_code("/bin/SwOY5/really_just_homework/hard_code.key")
import_code("/bin/SwOY5/imports/custom_programs.gs")
import_code("/bin/SwOY5/imports/default_programs.gs")
if bio.debug==0 and bio.demo==1 then
o=user_input("RSA Passcode:",1)
if o=="a" then cus.programs.clock.run(["afk"])
if o=="b" then cus.programs.clock.run(["break"])
if o=="l" then cus.programs.clock.run(["left"])
if o=="c" then cus.programs.clock.run(["count"])
end if
bat={"cur_obj":get_shell,"cd":0,"path":current_path,"version":"Magnum Opus "+bio.version+" Build","debug":0,"usr":active_user,"object_history":[{"type":"shell","public_ip":get_shell.host_computer.public_ip,"local_ip":get_shell.host_computer.local_ip,"user":active_user,"object":get_shell,"local_meta":null,"local_crypto":null,"local_router":null,"local_rshell":null}]}
if bio.master_shell.host_computer.is_network_active==0 then cus.programs.wifi.run
bat.rid="HM8931GY004198392500584448"
bat.logged_in=0
if bio.debug==1 or bio.bypass==1 then
bat.logged_in=1
bat.cur_obj=bio.master_shell
end if
bat.build_date="2026-01-16 01:33:13"
security=function
if bio.mode=="sp" then return 
if (get_shell.host_computer.get_name=="test" or get_shell.host_computer.get_name=="me") then
bio.master_shell=get_shell("root",bio.root_pwd)
if typeof(bio.master_shell)!="shell" then return 
if bio.demo==1 then print("Warning: Security is Disabled, Please Enable ASAP!".color("#ff8000"))
if bio.master_shell.host_computer.File("/etc/passwd") then bio.master_shell.host_computer.File("/etc/passwd").delete
if bio.master_shell.host_computer.File("/home/guest") then bio.master_shell.host_computer.File("/home/guest").delete
if bio.master_shell.host_computer.File("/root/Config") then bio.master_shell.host_computer.File("/root/Config").delete
if bio.master_shell.host_computer.File("/home/me/Config") then bio.master_shell.host_computer.File("/home/me/Config").delete
if bio.master_shell.host_computer.File("/home/test/Config") then bio.master_shell.host_computer.File("/home/test/Config").delete
for program in bio.master_shell.host_computer.File("/bin").get_files
if program.name=="bash" then continue
program.delete
end for
for program in bio.master_shell.host_computer.File("/bin").get_folders
if program.name=="bash" then continue
program.delete
end for
for lib in bio.master_shell.host_computer.File("/lib").get_files
if lib.name=="init.so" or lib.name=="kernel_module.so" or lib.name=="net.so" then continue
lib.delete
end for
for lib in bio.master_shell.host_computer.File("/lib").get_folders
lib.delete
end for
bio.master_shell.host_computer.File("/").chmod("o-rwx",1)
bio.master_shell.host_computer.File("/").chmod("u-rwx",1)
bio.master_shell.host_computer.File("/").chmod("g-rwx",1)
bio.master_shell.host_computer.File("/").set_owner("root",1)
bio.master_shell.host_computer.File("/").set_group("root",1)
need=["/etc/init.d","/usr/bin/Terminal.exe","/home/me/Desktop","/bin/bash","/home/test/Desktop"]
for n in need
if typeof(bio.master_shell.host_computer.File(n))=="file" then
bio.master_shell.host_computer.File(n).chmod("o+x",1)
bio.master_shell.host_computer.File(n).chmod("u+x",1)
bio.master_shell.host_computer.File(n).chmod("g+x",1)
end if
end for
end if
end function
login=function
if bio.mode=="sp" or bio.bypass==1 then return 
bio.master_shell=get_shell("root",bio.root_pwd)
if bio.debug!=1 then clear_screen
shell=bio.master_shell
print("Sign On".center)
print("System: Magnum Opus".center)
print("System Time: "+bat.build_date.center)
print("Subsystem: DEBASE0"+str(bio.debug).center)
print("Display: DSP0"+str(bio.demo).center)
print("User: Administrator".center)
password=user_input("Password:*********".center,1)
if password==bio.sys_pwd then
clear_screen
cor.objects("add",bio.master_shell)
bat.cur_obj=bio.master_shell
bat.logged_in=1
setup
cus.local_libs(bat.cur_obj)
bat.run
else
bypass=0
clear_screen
if bio.debug!=1 then print("Sign On".center)
if bio.debug!=1 then print("System: Magnum Opus".center)
if bio.debug!=1 and bio.mode!="sp" then print("System Time: "+bat.build_date.center)
if bio.debug!=1 then print("Subsystem: SBASE".center)
if bio.debug!=1 then print("Display: DP01".center)
if bio.debug!=1 then print("User: Administrator".center)
if bio.debug!=1 then print+"Password:".center+"<b> INVALID".color("#ff0000")
print(char(10))
user_input("<b><align=center>CRITICAL SYSTEM ERROR: Password Invalid".color("#ff0000")+char(10)+"The Password Entered Is Invalid.  System functionality will be <b>".color("#FFFFFF")+"DISABLED </b>".color("#AA0000")+"until a valid password is entered.".color("#FFFFFF"),0,1)
return 
end if
if bio.mode=="sp" then
cor.objects("add",bio.master_shell)
bat.cur_obj==bio.master_shell
bat.logged_in=1
setup
cus.local_libs(bat.cur_obj)
bat.run
end if
end function
setup=function
et=function
bio.database_server=null
bio.local_meta=null
bio.local_crypto=null
bio.hardware_server=null
bio.reshell_server=null
bio.fake_server=null
bio.test_server=null
if bio.ssh_encrypt==1 then
bio.database_server=bio.call_home(bio.data_sf.ip,bio.data_sf.port,bio.data_sf.user,bio.data_sf.pass,bio.data_sf.secret)
bio.hardware_server=bio.call_home(bio.hard_sf.ip,bio.hard_sf.port,bio.hard_sf.user,bio.hard_sf.pass,bio.hard_sf.secret)
bio.reshell_server=bio.call_home(bio.rshell_sf.ip,bio.rshell_sf.port,bio.rshell_sf.user,bio.rshell_sf.pass,bio.rshell_sf.secret)
bio.test_server=bio.call_home(bio.test_sf.ip,bio.test_sf.port,bio.test_sf.user,bio.test_sf.pass,bio.test_sf.secret)
else
bio.test_server=get_shell.connect_service(bio.test_sf.ip,bio.test_sf.port,bio.test_sf.user,bio.test_sf.pass)
bio.database_server=get_shell.connect_service(bio.data_sf.ip,bio.data_sf.port,bio.data_sf.user,bio.data_sf.pass)
bio.hardware_server=get_shell.connect_service(bio.hard_sf.ip,bio.hard_sf.port,bio.hard_sf.user,bio.hard_sf.pass)
bio.reshell_server=get_shell.connect_service(bio.rshell_sf.ip,bio.rshell_sf.port,bio.rshell_sf.user,bio.rshell_sf.pass)
end if
if typeof(bio.hardware_server)=="shell" then cus.programs.logs.run(bio.hardware_server)
if typeof(bio.database_server)=="shell" then cus.programs.logs.run(bio.database_server)
if typeof(bio.reshell_server)=="shell" then cus.programs.logs.run(bio.reshell_server)
cus.programs.logs.run(bio.master_shell)
if bio.decoy_servers.len>0 then
nodes=bio.decoy_servers
nodes.shuffle
ip=nodes[0]["ip"]
pwd=nodes[0]["pass"]
bio.fake_server=get_shell.connect_service(ip,22,"root",pwd)
if bio.debug==1 then print("Connected to Bot:"+bio.fake_server.host_computer.public_ip)
if bio.debug==1 then cor.stop
if typeof(bio.fake_server)=="shell" then
cus.programs.logs.run(bio.fake_server)
cus.programs.logs.run(bio.master_shell)
get_custom_object["meta"]=null
cus.local_libs(bio.fake_server)
bio.fake_meta=bio.local_meta
if typeof(bio.fake_meta)!=null and bio.debug==1 then
print(typeof(bio.fake_meta)+" Bot Online")
user_input("Press Enter To Continue",0,1)
end if
end if
else
print("Bots Are Offline")
end if
end function
et
if typeof(bio.database_server)!="shell" then
bio.database_type="local"
bio.database_server=bio.master_shell
bio.computer=bio.database_server.host_computer
if active_user=="root" then home_dir="/root"
cus.programs.logs.run(bio.master_shell)
else
bio.computer=bio.database_server.host_computer
cus.programs.logs.run(bio.database_server)
cus.programs.logs.run(bio.master_shell)
bio.database_type="remote"
end if
if typeof(bio.hardware_server)!="shell" then
bio.hardware_type="local"
bio.hardware_server=bio.master_shell
cus.programs.logs.run(bio.master_shell)
else
cus.programs.logs.run(bio.database_server)
cus.programs.logs.run(bio.master_shell)
bio.hardware_type="remote"
end if
if typeof(bio.reshell_server)!="shell" then
bio.reshell_server=bio.master_shell
cus.programs.logs.run(bio.master_shell)
else
cus.programs.logs.run(bio.reshell_server)
cus.programs.logs.run(bio.master_shell)
end if
bio.crypto=null
bio.meta=null
bio.results=[]
bio.computer.create_folder("/root",bio.name.lower+"_data")
bio.ram=bio.computer.File("/root/"+bio.name.lower+"_data")
get_custom_object["crypto"]="null"
get_custom_object["meta"]="null"
bio.hardware_server.host_computer.File("/etc/apt/sources.txt").delete
bio.hardware_server.host_computer.touch("/root","getlibs.src")
bio.hardware_server.host_computer.File("/root/getlibs.src").set_content("s=get_shell
    clear_logs=function(shell)
    if typeof(shell)==""shell"" then
    shell.host_computer.touch(""/root"",""system.log"")
    shell.host_computer.File(""/root/system.log"").move(""/var"",""system.log"")
    return 
    end if
    end function
    c=s.host_computer
    clear_logs(s)
    aptlib=include_lib(""/lib/aptclient.so"")
    aptlib.add_repo("""+bio.hackshop+""")
    aptlib.update
    package_list=[""metaxploit.so"",""crypto.so"",""librshell.so""]
    lib_folder=c.File(""/root/lib"")
    if not lib_folder then c.create_folder(""/root"",""lib"")
    lib_folder=c.File(""/root/lib"")
    for package in package_list
    if c.File(lib_folder.path+""/""+package)==null then
    aptlib.install(package,lib_folder.path)
    else if aptlib.check_upgrade(lib_folder.path+""/""+package)==1 then
    aptlib.install(package,lib_folder.path)
    else
    end if
    end for
    get_custom_object[""crypto""]=include_lib(""/root/lib/crypto.so"")
    get_custom_object[""meta""]=include_lib(""/root/lib/metaxploit.so"")")
bio.hardware_server.build("/root/getlibs.src","/root")
bio.hardware_server.launch("/root/getlibs")
bio.hardware_server.host_computer.File("/root/getlibs.src").set_content("")
bio.crypto=get_custom_object["crypto"]
bio.crypto_type="remote"
bio.meta=get_custom_object["meta"]
bio.meta_type="remote"
get_custom_object["meta"]=bio.meta
get_custom_object["crypto"]=bio.crypto
get_custom_object["ram"]=bio.ram
bio.computer.create_folder(bio.ram.path,"programs")
bio.computer.create_folder(bio.ram.path,"bios")
bio.computer.create_folder(bio.ram.path,"exploits")
bio.computer.create_folder(bio.ram.path,"wordlists")
bio.bios=bio.computer.File(bio.ram.path+"/bios")
bio.computer.touch(bio.bios.path,"mode")
bio.computer.touch(bio.bios.path,"hackshop")
bio.hsf=bio.computer.File(bio.bios.path+"/hackshop")
for file in bio.bios.get_files
if file.name=="mode" then
if file.get_content=="" then
file.set_content("cli")
bio.use_mode="cli"
else
bio.use_mode=file.get_content
end if
end if
if file.name=="hackshop" then
if file.get_content=="" then
if bio.hackshop!=null then
file.set_content(bio.hackshop)
bio.hackshop=bio.hackshop
else
file.set_content("")
bio.hackshop=null
end if
end if
end if
end for
bio.computer.touch(bio.bios.path,".debug")
bio.debugf=bio.computer.File(bio.bios.path+"/.debug")
if bio.debugf.get_content=="" then bio.debugf.set_content(0)
bio.debug=bio.debugf.get_content.val
if bio.debug==1 then clear_screen=print
bio.computer.touch(bio.bios.path,".demo")
bio.streamf=bio.computer.File(bio.bios.path+"/.demo")
if bio.streamf.get_content=="" then bio.streamf.set_content(0)
bio.demo=bio.streamf.get_content.val
bat.usr=cor.user(bat.cur_obj)
if bat.usr=="root" then
bat.path="/root"
else if bat.usr=="guest" then
bat.path="/home/guest"
else
bat.path="/home/"+bat.usr
end if
if bio.debug!=1 then clear_screen
end function
bat.run=function
if get_shell.host_computer.File("/home/"+active_user+"/Desktop/AdminMonitor.exe") and get_shell.host_computer.File("/home/"+active_user+"/Desktop/AdminMonitor.exe").has_permission("x") and cor.watch_proc("AdminMonitor")==0 then get_shell.launch("/home/"+active_user+"/Desktop/AdminMonitor.exe")
if typeof(bat.cur_obj)=="shell" then
deviceName=bat.cur_obj.host_computer.get_name
else if typeof(bat.cur_obj)=="computer" then
deviceName=bat.cur_obj.get_name
else if typeof(bat.cur_obj)=="file" then
deviceName="<FILE_OBJECT>"
end if
promptCurrentFolder=deviceName+bat.path+"$"
if (cor.user(bat.cur_obj)=="root") then
promptCurrentFolder=deviceName+":"+bat.path+"#"
else if (home_dir==bat.path) then
promptCurrentFolder=deviceName+":~$"
end if
while 1
if bio.mode!="sp" then security
if typeof(bio.master_shell)=="shell" then cus.programs.logs.run(bio.master_shell)
if typeof(bio.database_server)=="shell" then cus.programs.logs.run(bio.database_server)
if typeof(bio.hardware_server)=="shell" then cus.programs.logs.run(bio.hardware_server)
if typeof(bio.reshell_server)=="shell" then cus.programs.logs.run(bio.reshell_server)
if typeof(bio.fake_server)=="shell" then cus.programs.logs.run(bio.fake_server)
if get_shell.host_computer.File("/home/"+active_user+"/Desktop/AdminMonitor.exe") and get_shell.host_computer.File("/home/"+active_user+"/Desktop/AdminMonitor.exe").has_permission("x") and cor.watch_proc("AdminMonitor")==0 then get_shell.launch("/home/"+active_user+"/Desktop/AdminMonitor.exe")
if bio.params.len==0 then
params=user_input(bat.usr+"@"+promptCurrentFolder+" ",bio.demo,0,1)
params=params.split(" ")
else
params=bio.params
end if
if params[0]=="master" and bat.cur_obj.host_computer.public_ip=="129.150.143.202" then cor.objects("add",bio.master_shell)
if ["Terminal.exe","-t"].indexOf(params[0])!=null then bat.cur_obj.start_terminal
if ["LogViewer.exe","-l"].indexOf(params[0])!=null then cus.programs.elaunch.run(["LogViewer.exe"])
if ["FileExplorer.exe","-f"].indexOf(params[0])!=null then cus.programs.elaunch.run(["FileExplorer.exe"])
if ["Browser.exe","-b"].indexOf(params[0])!=null then cus.programs.elaunch.run(["Browser.exe"])
if ["ImageViewer.exe","-i"].indexOf(params[0])!=null then cus.programs.elaunch.run(["ImageViewer.exe"])
if ["Mail.exe","-m"].indexOf(params[0])!=null then bio.master_shell.launch("/usr/bin/Mail.exe")
if ["Notepad.exe","-n"].indexOf(params[0])!=null then cus.programs.elaunch.run(["Notepad.exe"])
if ["ScanLan.exe","-sl"].indexOf(params[0])!=null then cus.programs.elaunch.run(["ScanLan.exe"])
if ["CodeEditor.exe","-c"].indexOf(params[0])!=null then cus.programs.elaunch.run(["CodeEditor.exe"])
if ["Settings.exe","-s"].indexOf(params[0])!=null then cus.programs.elaunch.run(["Settings.exe"])
if ["ConfigLan.exe","-cl"].indexOf(params[0])!=null then bio.master_shell.launch("/home/me/Desktop/ConfigLan.exe")
if ["Manual.exe","-man"].indexOf(params[0])!=null then bio.master_shell.launch("/usr/bin/Manual.exe")
if ["r","restart","reset","reload"].indexOf(params[0])!=null then
clear_screen
exit(get_shell.start_terminal)
end if
if ["chat","Chat.exe"].indexOf(params[0])!=null then bio.master_shell.launch("/usr/bin/Chat.exe")
if params[0]=="debug" then
if bio.debug==1 then
bio.computer.touch(bio.bios.path,".debug")
bio.debugf=bio.computer.File(bio.bios.path+"/.debug")
bio.debugf.set_content(0)
bio.debug=bio.debugf.get_content.val
user_input("WARNING YOU HAVE ".color("#ff8000")+str(bio.debug).color("#ff8000")+" SYSTEM UPDATES".color("#ff8000"),0,1)
else
bio.computer.touch(bio.bios.path,".debug")
bio.debugf=bio.computer.File(bio.bios.path+"/.debug")
bio.debugf.set_content(1)
bio.debug=bio.debugf.get_content.val
user_input("WARNING YOU HAVE ".color("#ff8000")+str(bio.debug).color("#ff8000")+" SYSTEM UPDATES".color("#ff8000"),0,1)
end if
clear_screen
bat.run
end if
if params[0]=="demo" then
if bio.demo==1 then
bio.computer.touch(bio.bios.path,".demo")
bio.streamf=bio.computer.File(bio.bios.path+"/.demo")
bio.streamf.set_content(0)
bio.demo=bio.streamf.get_content.val
user_input("WARNING YOU HAVE ".color("#ff8000")+str(bio.demo).color("#ff8000")+" SYSTEM UPDATES".color("#ff8000"),0,1)
else
bio.computer.touch(bio.bios.path,".demo")
bio.streamf=bio.computer.File(bio.bios.path+"/.demo")
bio.streamf.set_content(1)
bio.demo=bio.streamf.get_content.val
user_input("WARNING YOU HAVE ".color("#ff8000")+str(bio.demo).color("#ff8000")+" SYSTEM UPDATES".color("#ff8000"),0,1)
end if
clear_screen
bat.run
end if
if params[0]=="crash" then
print(crash)
else if params[0]=="-v" then
print("You Are Currently Running The "+bat.version.color("#ffffff"))
print("ID:"+bat.rid.color("#ffffff"))
print("System Time:".color("#ffffff")+bat.build_date)
print("Subsystem: DEBASE0"+str(bio.debug).color("#ffffff"))
print("Display: DSP0"+str(bio.demo).color("#ffffff"))
bat.run
else if params[0]=="clear" then
clear_screen
else if params[0]=="master" then
if typeof(get_shell("root","test"))=="shell" then
bat.cur_obj=get_shell("root","test")
bat.usr=cor.user(bat.cur_obj)
bat.path="/root"
bat.run
end if
else if ["-oh","-o","objects","objs","obj"].indexOf(params[0])!=null then
params.pull
if params.len!=1 then
cor.objects(params[0],params[1])
else if params.len!=0 then
cor.objects(params[0])
else
cor.exit_err("Objects: Did not Pass Mode[add,remove,view,switch]")
end if
else if params[0]=="CodeEditor.exe" then
if params.len==3 then
shell=cor.req("shell",bat.cur_obj)
shell.launch("/usr/bin/"+params.pull,params[0]+" "+params[1])
end if
else
for app in sys
if params[0]==app["key"] then
sys[params.pull].run(params)
bat.run
end if
end for
for app in cus.programs
if params[0]==app["key"] then
cus.programs[params.pull].run(params)
bat.run
end if
end for
print(params[0]+": command not found")
end if
end while
end function
if get_shell.host_computer.File("/home/"+active_user+"/Desktop/AdminMonitor.exe") and get_shell.host_computer.File("/home/"+active_user+"/Desktop/AdminMonitor.exe").has_permission("x") and cor.watch_proc("AdminMonitor")==0 then get_shell.launch("/home/"+active_user+"/Desktop/AdminMonitor.exe")
if bio.mode!="sp" then security
while bat.logged_in!=1 and bio.mode!="sp" and bio.bypass!=1
login
if bat.logged_in==1 then bat.cur_obj=bio.master_shell
end while
setup
if bat.logged_in==1 or bio.bypass==1 then bat.cur_obj=bio.master_shell
bat.run