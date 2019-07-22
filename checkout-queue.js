/*
There is a queue for the self-checkout tills at the supermarket. Your task is 
write a function to calculate the total time required for all the customers to 
check out!

*== input ==*
   - customers: an array of positive integers representing the queue. Each 
   integer represents a customer, and its value is the amount of time they 
   require to check out.
	- n: a positive integer, the number of checkout tills.

*== output ==*
The function should return an integer; the total time required.

! Important
! Please look at the examples and clarifications below, to ensure you 
! understand the task correctly

*== Examples==*
queueTime([5,3,4], 1)
Expected result: 12
because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
Expected result: 10
because here n=2 and the 2nd, 3rd, and 4th people in the queue finish before 
the 1st person has finished.

queueTime([2,3,10], 2)
Expected result: 12

? Clarifications
? There is only ONE queue serving many tills, and the order of the queue NEVER 
? changes, and the front person in the queue (i.e. the first element in the 
? array/list) proceeds to a till as soon as it becomes free.

*== Stretch ==*
queueTime( [44, 41, 46, 26, 39, 7, 35, 17, 49, 43, 40, 7, 32, 34, 12, 18, 39, 22, 9, 28, 25, 15, 6, 3], 3 )
Expected result: 214.
*/

