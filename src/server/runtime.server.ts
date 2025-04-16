import { Flamework } from "@flamework/core";

Flamework.addPaths("src/server/data");
Flamework.addPaths("src/server/services");
Flamework.addPaths("src/server/logic");
Flamework.addPaths("src/shared/components");
Flamework.addPaths("src/shared/types");

Flamework.ignite();
