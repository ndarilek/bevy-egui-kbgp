initSidebarItems({"derive":[["SystemParam","Implement `SystemParam` to use a struct as a parameter in a system"]],"enum":[["QueryComponentError","An error that occurs when retrieving a specific [`Entity`]’s component from a [`Query`]"]],"fn":[["assert_is_exclusive_system","Ensure that a given function is an exclusive system"],["assert_is_system","Ensure that a given function is a system"]],"mod":[["lifetimeless",""]],"struct":[["AlreadyWasSystem",""],["ChainSystem","A [`System`] that chains two systems together, creating a new system that routes the output of the first system into the input of the second system, yielding the output of the second system."],["CommandQueue","A queue of [`Command`]s"],["Commands","A queue of commands that get executed at the end of the stage of the system that called them."],["Despawn",""],["EntityCommands","A list of commands that will be run to modify an entity."],["ExclusiveSystemCoerced",""],["ExclusiveSystemFn",""],["FunctionSystem","The [`System`] counter part of an ordinary function."],["GetOrSpawn",""],["In","Wrapper type to mark a [`SystemParam`] as an input."],["InitResource",""],["Insert",""],["InsertBundle",""],["InsertOrSpawnBatch",""],["InsertResource",""],["IsFunctionSystem",""],["Local","A system local [`SystemParam`]."],["LogComponents","[`Command`] to log the components of a given entity. See [`EntityCommands::log_components`]."],["NonSend","Shared borrow of a non-[`Send`] resource."],["NonSendMut","Unique borrow of a non-[`Send`] resource."],["ParallelCommands","An alternative to [`Commands`] that can be used in parallel contexts, such as those in `Query::par_for_each`"],["ParamSet",""],["ParamSetState","The [`SystemParamState`] of [`ParamSet<T::Item>`]."],["Query","Provides scoped access to components in a [`World`]."],["Remove",""],["RemoveBundle",""],["RemoveResource",""],["RemovedComponents","A [`SystemParam`] that grants access to the entities that had their `T` [`Component`] removed."],["Res","Shared borrow of a resource."],["ResMut","Unique mutable borrow of a resource."],["Spawn",""],["SpawnBatch",""],["StaticSystemParam","A helper for using system parameters in generic contexts"],["SystemChangeTick","A [`SystemParam`] that reads the previous and current change ticks of the system."],["SystemMeta","The metadata of a [`System`]."],["SystemState","Holds on to persistent state required to drive [`SystemParam`] for a [`System`]."],["SystemTypeIdLabel","A [`SystemLabel`] that was automatically generated for a system on the basis of its `TypeId`."]],"trait":[["AsSystemLabel","Used to implicitly convert systems to their default labels. For example, it will convert “system functions” to their [`SystemTypeIdLabel`]."],["Command","A [`World`] mutation."],["ExclusiveSystem",""],["IntoChainSystem","An extension trait providing the [`IntoChainSystem::chain`] method for convenient [`System`] chaining."],["IntoExclusiveSystem",""],["IntoSystem","Conversion trait to turn something into a [`System`]."],["ReadOnlySystemParamFetch","A [`SystemParamFetch`] that only reads a given [`World`]."],["Resource",""],["System","An ECS system that can be added to a `Schedule`"],["SystemParam","A parameter that can be used in a `System`."],["SystemParamFetch",""],["SystemParamFunction","A trait implemented for all functions that can be used as [`System`]s."],["SystemParamState","The state of a [`SystemParam`]."]],"type":[["BoxedSystem","A convenience type alias for a boxed [`System`] trait object."],["SystemParamItem",""]]});