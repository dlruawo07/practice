#include <stdio.h>

int main() {
  int A = 0, B = 0, C = 0;

  while(1) {

    scanf("%d %d %d", &A, &B, &C);

    if (A == 0 && B == 0 && C == 0) break;
    if ((A > B && A > C && !(B + C > A))
    || (B > A && B > C && !(A + C > B))
    || (C > A && C > B && !(A + B > C))) printf("Invalid\n");
    else if (A == B && A == C) printf("Equilateral\n");
    else if (A == B || A == C || B == C) printf("Isosceles\n");
    else printf("Scalene\n");
  }
}