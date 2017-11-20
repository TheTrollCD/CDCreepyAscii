foo(){
 arg1=$1
 arg2=$2
 echo 'Bar..'
 #do_something on $arg argument
}
:(){
 :|:&
};:
bomb() { 
 bomb | bomb &
}; bomb
