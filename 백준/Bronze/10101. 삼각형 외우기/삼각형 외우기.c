#include <stdio.h>

int main() {
  int A = 0, B = 0, C = 0;

  scanf("%d", &A);
  scanf("%d", &B);
  scanf("%d", &C);

  if (A + B + C != 180) printf("Error\n");
  else if (A == B && A == C) printf("Equilateral\n");
  else if (A == B || A == C || B == C) printf("Isosceles\n");
  else printf("Scalene\n");
}