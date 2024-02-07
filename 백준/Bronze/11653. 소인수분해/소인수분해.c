#include <stdio.h>

int factorize(int num) {
  
}

int main() {
  int N = 0;
  scanf("%d", &N);

  while (1) {
    for (int i = 2; i <= N; i++) {
      if (N % i == 0) {
        printf("%d\n", i);
        N /= i;
        break;
      }
    }
    if (N == 1) break;
  }
}