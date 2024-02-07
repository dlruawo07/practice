#include <stdio.h>

int is_prime_number(int num) {
  if (num == 1) return 0;
  for (int i = 2; i < (num / 2) + 1; i++) {
    if (num % i == 0) return 0;
  }
  return 1;
}

int main() {
  int M = 0, N = 0, min = -1, sum = 0;

  scanf("%d", &M);
  scanf("%d", &N);

  for (int i = M; i <= N; i++) {
    if (is_prime_number(i)) {
      if (min == -1) min = i;
      sum += i;
    }
  }

  if (min != -1) printf("%d\n", sum);
  printf("%d\n", min);
}