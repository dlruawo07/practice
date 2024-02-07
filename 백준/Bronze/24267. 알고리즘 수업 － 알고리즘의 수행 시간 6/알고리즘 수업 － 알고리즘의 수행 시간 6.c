#include <stdio.h>

int main() {
    long long n = 0;
    scanf("%lld", &n);
    printf("%lld\n3\n", (n * (n - 1) * (n - 2)) / 6);
}