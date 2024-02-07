#include <stdio.h>

int main() {
  int A = 0, B = 0, C = 0, max = 0, sum = 0;

  scanf("%d %d %d", &A, &B, &C);
  if (A == B && A == C && B == C) {
    printf("%d\n", A + B + C);
    return 0;
  }

  if (A >= C && A >= B) {
    max = A;
    sum = B + C;
  }
  if (B >= A && B >= C) {
    max = B;
    sum = A + C;
  }
  if (C >= A && C >= B) {
    max = C;
    sum = A + B;
  }

  if (max >= sum)
    max = sum - 1;

  printf("%d\n", max + sum);
}