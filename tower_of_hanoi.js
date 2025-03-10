function towerOfHanoi(n, source, target, auxilliary){
    if(n === 1){
        console.log(`move disk 1 from ${source} to ${target}`);
    }
    else {
        towerOfHanoi(n-1, source, auxilliary, target);
        console.log(`move disk ${n} from ${source} to ${target}`);
        towerOfHanoi(n-1, auxilliary, target, source);
    }
}
towerOfHanoi(4, "A", "C", "B");