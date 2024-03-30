{/* <div className="flex items-center p-3">
          <Input
            placeholder="Filter emails..."
            value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
            onChange={(event) =>
              table.getColumn('email')?.setFilterValue(event.target.value)
            }
            className="max-w-sm mr-2"
          />
          <div className="flex items-center space-x-2">
            <Switch id="live" onClick={() => setIsLiveMode(!isLiveMode)} />
            <Label htmlFor="live">{isLiveMode ? 'Live' : 'Archive'}</Label>
          </div>
          <Button
            className="ml-auto"
            variant="ghost"
            onClick={toggleColumnVisibility}
          >
            {isGroupView ? <DashboardIcon /> : <ListBulletIcon />}
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                <GearIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div> */}

          /**
   * This method is used to toggle the visibility of accordian making the table group by row and vice versa
   */
  // const toggleColumnVisibility = () => {
  //   setIsGroupView(!isGroupView);
  //   const toggleColumn = table
  //     .getAllColumns()
  //     .find((column) => column.id === 'toggle');
  //   if (toggleColumn && toggleColumn.getCanHide()) {
  //     toggleColumn.toggleVisibility(!isGroupView);
  //   }
  // };
