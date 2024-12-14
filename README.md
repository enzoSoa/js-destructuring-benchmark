# JS Destructuring assignment benchmark

A small repository to benchmark the performance issues of using descruturing to create an object

```algorithm
create an array of 100000 element

take the basic assignement method starting time
create an index variable
create an object by iterating on every value of the array :
    adding 1 to the index
    setting the object value at index to "value ${index}"
take the basic assignement method ending time
displaying basic assignment time

take the destructuring assignement method starting time
create an index variable
create an object by iterating on every value of the array :
    adding 1 to the index
    destructuring the already assigned value into a new object
    setting the object value at index to "value ${index}"
take the destructuring assignement method ending time
displaying destructuring time
```

## Test #1
### Setup

| OS       | CPU               | Memory                        |
|:--------:|:-----------------:|:-----------------------------:|
| Arch WSL | i5 12600K ~3.7GHz | 16 Go (2x 8 Go) DDR5 4800 MHz |

### Benchmark

| Mutable Array time | Destructuring Array |
|:------------------:|:-------------------:|
|               12ms |             21468ms |


