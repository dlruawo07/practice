#include <stdio.h>

long long MenOfPassion(long long n) {
  long long sum = 0;
  for (int i = 1; i <= n - 1; i++) {
    sum += i;
  }
  return sum;
}

int main() {
    long long n = 0;
    scanf("%lld", &n);
    printf("%lld\n2\n", MenOfPassion(n));
}