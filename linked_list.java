import java.util.*;
import java.lang.*;
import java.io.*;

class Node{

    int data;
    Node next;
    public Node(int data){
        this.data = data ;
        this.next = null;
    }

    public void printdata(){
        System.out.println(this.data+"-->"+this.next);
    }

}

class main{
    public static void main(String[] args) {
        Node n1 = new Node(5);
        n1.printdata();
        
    }
}