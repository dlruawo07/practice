#include <stdio.h>

int main() {
  int N = 0, min = 1000000, max = -1000000;
  scanf("%d", &N);

  int A[N];
  for(int i = 0; i < N; i++) {
    scanf("%d", &A[i]);
  }

  for (int i = 0; i < N; i++) {
    if (A[i] > max) max = A[i];
    if (A[i] < min) min = A[i];
  }

  printf("%d %d", min, max);
  
  return 0;
}