#include <stdio.h>

int main() {
  int N = 0, K = 0, C = 0, idx = 0;

  scanf("%d %d", &N, &K);

  int F[N];
  
  for (int i = 1; i <= N; i++) {
    F[i - 1] = 0;
    if (N % i == 0) {
      F[idx++] = i;
    }
  }
  printf("%d\n", F[K - 1]);
}