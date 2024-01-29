#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main() {
  char **S = malloc((sizeof(char *) * (5 + 1)));
  S[5] = "";
  for (int i = 0; i < 5; i++) {
    S[i] = malloc(sizeof(16));
    scanf("%s", S[i]);
  }

  int max = 0;
  for (int i = 1; i < 5; i++) {
    if (strlen(S[max]) < strlen(S[i])) max = i;
  }

  for (int j = 0; j < strlen(S[max]); j++) {
    for (int i = 0; i < 5; i++) {
      if (j >= strlen(S[i])) continue;
      printf("%c", S[i][j]);
    }
  }
}